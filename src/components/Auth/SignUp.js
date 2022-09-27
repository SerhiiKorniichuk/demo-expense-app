import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Icon, IconButton, InputAdornment } from "@mui/material";
import store from "../../stores/store";
import { observer } from "mobx-react";
import { useForm, Controller } from "react-hook-form";
import errorStore from "../../stores/errorStore";
import { errorFormatter } from "../../utils/errorFormatter";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { isPassVisible } = store;
  const isError = Object.keys(errors).length > 0 || !!errorStore.errors.length;
  const isMultipleError = Object.keys(errors).length > 1;
  const onSubmit = (event) => {
    console.log(event);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        position="relative"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h1" sx={{ alignSelf: "baseline" }}>
          SIGN UP
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            id="fullname"
            name="fullname"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="Full Name"
                autoComplete="fullname"
                autoFocus
                variant="standard"
                color="secondary"
              />
            )}
          />
          <Controller
            id="username"
            name="username"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                fullWidth
                label="User Name"
                autoComplete="username"
                variant="standard"
                color="secondary"
              />
            )}
          />
          <Controller
            name="password"
            id="password"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type={isPassVisible ? "text" : "password"}
                margin="normal"
                fullWidth
                label="Password"
                autoComplete="current-password"
                variant="standard"
                color="secondary"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => store.setIsPassVisible(!isPassVisible)}
                        edge="end"
                      >
                        {isPassVisible ? (
                          <VisibilityOutlinedIcon sx={{ mr: "3px", mb: "1px" }} />
                        ) : (
                          <VisibilityOffOutlinedIcon sx={{ mr: "3px", mb: "1px" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            id="confirmPassword"
            defaultValue=""
            control={control}
            rules={{
              required: true,
              validate: (value) => value === watch("password"),
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type={isPassVisible ? "text" : "password"}
                margin="normal"
                fullWidth
                label="Confirm Password"
                variant="standard"
                color="secondary"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => store.setIsPassVisible(!isPassVisible)}
                        edge="end"
                      >
                        {isPassVisible ? (
                          <VisibilityOutlinedIcon sx={{ mr: "3px", mb: "1px" }} />
                        ) : (
                          <VisibilityOffOutlinedIcon sx={{ mr: "3px", mb: "1px" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          {isError &&
            [
              `${errorFormatter(errors, isMultipleError)}`,
              errors.confirmPassword && " Password's must match",
              errorStore.errors.map((error) => error),
            ].map((textError) => (
              <Typography
                component="p4"
                variant="p4"
                fontStyle="normal"
                fontSize="12px"
                fontWeight="400"
                color="error.main"
                align="center"
                alignSelf="center"
                sx={{ mt: 3, mb: 3 }}
              >
                {textError}
              </Typography>
            ))}

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 3 }}>
            Sign Up
          </Button>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              component="p4"
              variant="p4"
              fontStyle="normal"
              fontSize="12px"
              fontWeight="400"
              align="center"
            >
              I have an account.
            </Typography>
            <Typography
              component="p4"
              variant="p4"
              fontStyle="normal"
              fontSize="12px"
              fontWeight="400"
              align="center"
              color="link.main"
              sx={{
                marginLeft: "5px",
                cursor: "pointer",
              }}
              onClick={() => store.setIsSignIn(true)}
            >
              Go to Sign in
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default observer(SignUp);

import {
  Box,
  Stack,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Select,
  MenuItem,
  Button,
  Input,
} from "@pankod/refine-mui";

import { FormProps } from "../../interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  onFinish,
  formLoading,
  handleSubmit,
  handleImageChange,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#fcfcfc">
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter property name
            </FormHelperText>
            <input
              fullwidth="true"
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              style={{
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
              }}
              {...register("title", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Enter a description"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
              }}
              {...register("description", { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select Property Type
              </FormHelperText>
              <select
                color="info"
                displayEmpty
                required
                style={{
                  width: "100%",
                  background: "transparent",
                  borderColor: "rgba(0,0,0,0.23)",
                  borderRadius: 6,
                  padding: 10,
                }}
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="apartment"
                {...register("propertyType", { required: true })}
              >
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="condos">Condos</option>
                <option value="townhouse">Townhouse</option>
                <option value="duplex">Duplex</option>
                <option value="studio">Studio</option>
                <option value="chalet">Chalet</option>
              </select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Enter property price
              </FormHelperText>
              <input
                fullwidth="true"
                required
                id="outlined-basic"
                color="info"
                type="number"
                variant="outlined"
                style={{
                  background: "transparent",
                  fontSize: "16px",
                  borderColor: "rgba(0,0,0,0.23)",
                  borderRadius: 6,
                  padding: 10,
                }}
                {...register("price", { required: true })}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Enter Location
            </FormHelperText>
            <input
              fullwidth="true"
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              style={{
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
              }}
              {...register("location", { required: true })}
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography
                color="#11142d"
                fontSize={16}
                fontWeight={500}
                my="10px"
              >
                Property Photo
              </Typography>

              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ed480",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={14}
              color="#808191"
              sx={{ wordBreak: "break-all" }}
            >
              {propertyImage?.name}
            </Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;

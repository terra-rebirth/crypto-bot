# It must use alpine3.12; otherwise, it won't work in Raspberry Pi 32bit.
FROM python:3-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# COPY requirements.txt requirements.txt
COPY requirements.txt /app
# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install --upgrade requests urllib3
# RUN pip install --force-reinstall requests urllib3

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV FLASK_APP=main.py
ENV FLASK_ENV=production

# Run app.py when the container launches
CMD [ "python", "main.py"]

interface BannerCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

export const BannerCard = ({
  title,
  description,
  imageUrl,
  className,
}: BannerCardProps) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-gradient-to-r from-primary-orange to-primary-orange-dark ${className}`}
    >
      <div className="relative z-10 p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="hidden lg:block">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white/50">Image Placeholder</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


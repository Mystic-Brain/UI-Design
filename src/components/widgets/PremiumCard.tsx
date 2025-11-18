import { Card } from '../common/Card';

interface PremiumCardProps {
  discount: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const PremiumCard = ({
  discount,
  title,
  description,
  imageUrl,
}: PremiumCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-secondary-purple to-secondary-purple/80 text-white">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="text-3xl font-bold mb-2">{discount}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/90 mb-4">{description}</p>
          <button className="px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-primary-orange-dark transition-colors">
            Upgrade
          </button>
        </div>
        {imageUrl && (
          <div className="w-full lg:w-48 flex-shrink-0">
            <img
              src={imageUrl}
              alt="Premium"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>
    </Card>
  );
};


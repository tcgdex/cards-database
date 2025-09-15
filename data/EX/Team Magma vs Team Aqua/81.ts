import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma Belt",
		fr: "Raclée de Team Magma",
		de: "Team Magma Gürtel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Raclée de Team Magma à 1 de vos Pokémon dont le nom comporte Team Magma et qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez cette carte.\n\nN'importe quand entre deux tours, si le Pokémon auquel Raclée de Team Magma est attaché est votre Pokémon Actif, cherchez dans votre deck une carte qui évolue de ce Pokémon et placez-la dessus. (Vous faites ainsi évoluer ce Pokémon). Ensuite, mélangez votre deck et défaussez Raclée de Team Magma.",
		de: "[Lege Team Magma Gürtel an eines deiner Pokémon mit \"Magma's\" im Namen an] Zu jedem Zeitpunkt zwischen den Zügen darfst du, falls das mit Team Magma Gürtel ausgerüstete Pokémon dein aktives Pokémon ist, darfst du eine Karte aus deinem Deck suchen, die sich aus dieser Karte entwickelt und lege sie auf das Pokémon. (Dies zählt als entwickeln des Pokémons.) Mische dein Deck danach, dann lege Team Magma Gürtel ab."
	},

	thirdParty: {
		cardmarket: 276058,
		tcgplayer: 89813
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card

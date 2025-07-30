import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua Belt",
		fr: "Raclée de Team Aqua",
		de: "Team Aqua Gürtel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Raclée de Team Magma à 1 de vos Pokémon dont le nom comporte Team Aqua et qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez cette carte.\n\nN'importe quand entre deux tours, si le Pokémon auquel Raclée de Team Aqua est attaché est votre Pokémon Actif, cherchez dans votre deck une carte qui évolue de ce Pokémon et placez-la dessus. (Vous faites ainsi évoluer ce Pokémon). Ensuite, mélangez votre deck et défaussez Raclée de Team Aqua.",
		de: "[Lege Team Aqua Gürtel an eines deiner Pokémon mit \"Aqua's\" im Namen an] Zu jedem Zeitpunkt zwischen den Zügen darfst du, falls das mit Team Aqua Gürtel ausgerüstete Pokémon dein aktives Pokémon ist, darfst du eine Karte aus deinem Deck suchen, die sich aus dieser Karte entwickelt und lege sie auf das Pokémon. (Dies zählt als entwickeln des Pokémons.) Mische dein Deck danach, dann lege Team Aqua Gürtel ab."
	},

	thirdParty: {
		cardmarket: 276053,
		tcgplayer: 89769
	}
}

export default card

import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Bounce Energy",
		de: "Abprall-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Diese Karte erzeugt -Energie. Du kannst diese Karte an dein Pokémon, an dem mindestens eine Basis-Energiekarte angelegt ist, anlegen. Wenn du diese Karte aus deiner Hand spielst und an 1 deiner Pokémon anlegst, bringe eine Basis-Energiekarte, die an dieses Pokémon angelegt ist, auf deine Hand zurück."
	},

	thirdParty: {
		cardmarket: 275400,
		tcgplayer: 83947
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card

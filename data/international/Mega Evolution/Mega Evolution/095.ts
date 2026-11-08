import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga",
		'it-it': "Dialga",
		'es-es': "Dialga",
		'pt-br': "Dialga",
		'es-mx': "Dialga"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",
	dexId: [483],

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'de-de': "Strahl",
			'it-it': "Raggio",
			'es-es': "Transmisión",
			'pt-br': "Feixe",
			'es-mx': "Rayo"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Chrono Burst",
			'fr-fr': "Explosion Chrono",
			'de-de': "Zeiteruption",
			'it-it': "Cronoscoppio",
			'es-es': "Cronoexplosión",
			'pt-br': "Explosão Temporal",
			'es-mx': "Cronoestallido"
		},

		effect: {
			'en-us': "You may shuffle all Energy attached to this Pokémon into your deck and have this attack do 80 more damage.",
			'fr-fr': "Vous pouvez mélanger toutes les Énergies attachées à ce Pokémon avec votre deck et infliger 80 dégâts supplémentaires avec cette attaque.",
			'de-de': "Du kannst alle an dieses Pokémon angelegten Energien in dein Deck mischen und diese Attacke 80 Schadenspunkte mehr zufügen lassen.",
			'it-it': "Puoi rimischiare tutte le Energie assegnate a questo Pokémon nel tuo mazzo e infliggere 80 danni in più con questo attacco.",
			'es-es': "Puedes barajar todas las Energías unidas a este Pokémon en tu baraja y hacer que este ataque haga 80 puntos de daño más.",
			'pt-br': "Você pode embaralhar todas as Energias ligadas a este Pokémon no seu baralho e fazer este ataque causar 80 pontos de dano a mais.",
			'es-mx': "Puedes barajar todas las Energías unidas a este Pokémon en tu mazo y hacer que este ataque haga 80 puntos de daño más."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851166,
				tcgplayer: 654434
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851166,
				tcgplayer: 654434
			}
		},
	],
}

export default card

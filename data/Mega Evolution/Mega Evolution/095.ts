import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga",
		fr: "Dialga",
		de: "Dialga",
		it: "Dialga",
		es: "Dialga",
		pt: "Dialga",
		'es-mx': "Dialga"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Beam",
			fr: "Rayon",
			de: "Strahl",
			it: "Raggio",
			es: "Transmisión",
			pt: "Feixe",
			'es-mx': "Rayo"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Chrono Burst",
			fr: "Explosion Chrono",
			de: "Zeiteruption",
			it: "Cronoscoppio",
			es: "Cronoexplosión",
			pt: "Explosão Temporal",
			'es-mx': "Cronoestallido"
		},

		effect: {
			en: "You may shuffle all Energy attached to this Pokémon into your deck and have this attack do 80 more damage.",
			fr: "Vous pouvez mélanger toutes les Énergies attachées à ce Pokémon avec votre deck et infliger 80 dégâts supplémentaires avec cette attaque.",
			de: "Du kannst alle an dieses Pokémon angelegten Energien in dein Deck mischen und diese Attacke 80 Schadenspunkte mehr zufügen lassen.",
			it: "Puoi rimischiare tutte le Energie assegnate a questo Pokémon nel tuo mazzo e infliggere 80 danni in più con questo attacco.",
			es: "Puedes barajar todas las Energías unidas a este Pokémon en tu baraja y hacer que este ataque haga 80 puntos de daño más.",
			pt: "Você pode embaralhar todas as Energias ligadas a este Pokémon no seu baralho e fazer este ataque causar 80 pontos de dano a mais.",
			'es-mx': "Puedes barajar todas las Energías unidas a este Pokémon en tu mazo y hacer que este ataque haga 80 puntos de daño más."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654434
	}
}

export default card
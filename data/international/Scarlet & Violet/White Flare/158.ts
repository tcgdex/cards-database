import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [643],
	set: Set,

	name: {
		'en-us': "Reshiram ex",
		'fr-fr': "Reshiram-ex",
		'de-de': "Reshiram-ex",
		'it-it': "Reshiram-ex",
		'pt-br': "Reshiram ex",
		'es-es': "Reshiram ex",
		'es-mx': "Reshiram ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'de-de': "Schlitzer",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'es-es': "Cuchillada",
			'es-mx': "Cuchillada"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Blazing Burst",
			'fr-fr': "Explosion Enflammée",
			'de-de': "Flammen-Ausbruch",
			'it-it': "Scoppiofiamma",
			'pt-br': "Explosão Flamejante",
			'es-es': "Explosión Abrasadora",
			'es-mx': "Estallido Abrasador"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each Prize card your opponent has taken. Discard an Energy from this Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée. Défaussez une Énergie de ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 50 Schadenspunkte mehr zu. Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario. Scarta un'Energia da questo Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou. Descarte uma Energia deste Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival. Descarta 1 Energía de este Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya tomado tu rival. Descarta 1 Energía de este Pokémon."
		},

		damage: "130+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836196,
			tcgplayer: 642275
		}
	},
],
}

export default card

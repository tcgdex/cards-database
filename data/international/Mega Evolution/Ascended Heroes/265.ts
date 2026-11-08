import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Froslass ex",
		'fr-fr': "Méga-Momartik-ex",
		'es-es': "Mega-Froslass ex",
		'es-mx': "Mega-Froslass ex",
		'de-de': "Mega-Frosdedje-ex",
		'it-it': "Mega Froslass-ex",
		'pt-br': "Mega Froslass ex"
	},
	evolveFrom: {
		'en-us': "Snorunt",
		'de-de': "Schneppke",
		'es-es': "Snorunt",
		'fr-fr': "Stalgamin",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
	},

	suffix: "ex",
	illustrator: "Saboteri",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [478],
	hp: 310,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Resentful Refrain",
			'fr-fr': "Complainte Rancunière",
			'es-es': "Rencor Contenido",
			'es-mx': "Rencor Lírico",
			'de-de': "Missgünstiger Refrain",
			'it-it': "Ritornello Rancoroso",
			'pt-br': "Refrão Ressentido"
		},

		effect: {
			'en-us': "This attack does 50 damage for each card in your opponent's hand.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque carte dans la main de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada carta en la mano de tu rival.",
			'es-mx': "Este ataque hace 50 puntos de daño por cada carta en la mano de tu rival.",
			'de-de': "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 50 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 50 danni per ogni carta nella mano del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada carta na mão do seu oponente."
		},

		damage: "50×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Absolute Snow",
			'fr-fr': "Neige Absolue",
			'es-es': "Nieve Absoluta",
			'es-mx': "Nieve Absoluta",
			'de-de': "Absoluter Schnee",
			'it-it': "Neve Assoluta",
			'pt-br': "Neve Absoluta"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869876,
				tcgplayer: 676077
			}
		}
	],
}

export default card

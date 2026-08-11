import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [547],
	set: Set,

	name: {
		'en-us': "Whimsicott V",
		'fr-fr': "Farfaduvet V",
		'es-es': "Whimsicott V",
		'it-it': "Whimsicott V",
		'pt-br': "Whimsicott V",
		'de-de': "Elfun V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fluff Gets in the Way",
			'fr-fr': "C'est Coton",
			'es-es': "Pelusa Molesta",
			'it-it': "Morbidostacolo",
			'pt-br': "Algodão Inconveniente",
			'de-de': "Flauschiges Hindernis"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Cotton Guard",
			'fr-fr': "Cotogarde",
			'es-es': "Rizo Algodón",
			'it-it': "Cotonscudo",
			'pt-br': "Proteção de Algodão",
			'de-de': "Watteschild"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608514,
				tcgplayer: 263780
			}
		},
	],
}

export default card

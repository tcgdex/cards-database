import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Cornerstone Mask Ogerpon ex",
		'fr-fr': "Ogerpon Masque de la Pierre-ex",
		'es-es': "Ogerpon Máscara Cimiento ex",
		'it-it': "Ogerpon Maschera Fondamenta-ex",
		'pt-br': "Ogerpon Máscara Alicerce ex",
		'de-de': "Fundamentmaske-Ogerpon-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cornerstone Stance",
			'fr-fr': "Posture de la Pierre",
			'es-es': "Posición Cimiento",
			'it-it': "Posa Fondamenta",
			'pt-br': "Postura de Alicerce",
			'de-de': "Fundamentabwehr"
		},

		effect: {
			'en-us': "Prevent all damage from attacks done to this Pokémon by your opponent's Pokémon that have an Ability.",
			'fr-fr': "Évitez tous les dégâts d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire ayant un talent.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival que tengan una habilidad.",
			'it-it': "Previeni tutti i danni degli attacchi inflitti a questo Pokémon dai Pokémon del tuo avversario che hanno un'abilità.",
			'pt-br': "Previna todo o dano de ataques causado a este Pokémon pelos Pokémon do seu oponente que têm uma Habilidade.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, die eine Fähigkeit haben, zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Demolish",
			'fr-fr': "Démolition",
			'es-es': "Derruir",
			'it-it': "Demolire",
			'pt-br': "Demolir",
			'de-de': "Demolieren"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769373,
				tcgplayer: 550243
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
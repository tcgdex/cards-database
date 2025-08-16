import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Royal Guard",
				fr: "Barrière Royale",
				es: "Guardia Real",
				it: "Guardia Reale",
				pt: "Proteção Régia",
				de: "Königswache"
			},
			effect: {
				en: "This Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 40 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 40 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shield Bash",
				fr: "Brusque Parade",
				es: "Golpe Escudo",
				it: "Colposcudo",
				pt: "Pancada de Escudo",
				de: "Schildschlag"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 369038,
		tcgplayer: 183893
	}
}

export default card

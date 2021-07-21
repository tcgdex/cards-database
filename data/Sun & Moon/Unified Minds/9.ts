import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
		es: "Leavanny",
		it: "Leavanny",
		pt: "Leavanny",
		de: "Matrifol"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		542,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blanket Weaver",
				fr: "Tisserand de Couvertures",
				es: "Tejemantas",
				it: "Tessimanto",
				pt: "Cobertor de Folhas",
				de: "Deckenflechter"
			},
			effect: {
				en: "Your Grass Pokémon take 40 less damage from your opponent’s attacks (after applying Weakness and Resistance). You can’t apply more than 1 Blanket Weaver Ability at a time.",
				fr: "Vos Pokémon Grass subissent 40 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Tisserand de Couvertures à la fois.",
				es: "Los ataques de tu rival hacen 40 puntos de daño menos a tus Pokémon Grass (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Tejemantas a la vez.",
				it: "I tuoi Pokémon Grass subiscono 40 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza. Può essere applicata solo un’abilità Tessimanto alla volta.",
				pt: "Seus Pokémon Grass recebem 40 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Cobertor de Folhas por vez.",
				de: "Deinen Grass-Pokémon werden durch Attacken deines Gegners 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Deckenflechter einsetzen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
				es: "Hoja Afilada",
				it: "Foglielama",
				pt: "Folha Navalha",
				de: "Rasierblatt"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card

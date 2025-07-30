import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	illustrator: "MPC Film",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Security Guard",
				fr: "Agent de Sécurité",
				es: "Guardia de Seguridad",
				it: "Custode",
				pt: "Segurança",
				de: "Sicherheitsdienst"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, all of your Pokémon take 30 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los ataques de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, i tuoi Pokémon subiscono 30 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, todos os seus Pokémon receberão 30 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, werden jedem deiner Pokémon durch Attacken deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 370771,
		tcgplayer: 186009
	}
}

export default card

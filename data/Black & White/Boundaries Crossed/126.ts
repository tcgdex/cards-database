import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Audino",
		fr: "Nanméouïe",
		es: "Audino",
		it: "Audino",
		pt: "Audino",
		de: "Ohrdoch"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Busybody",
				fr: "Sans-Gêne",
				es: "Polvorilla",
				it: "Corpimpegnato",
				pt: "Corpo Agitado",
				de: "Prahlhans"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your hand, you may reveal it. If you do, heal 10 damage and remove a Special Condition from your Active Pokémon. Then, discard this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre main, vous pouvez le montrer. Dans ce cas, soignez 10 dégâts et retirez un État Spécial de votre Pokémon Actif. Ensuite, défaussez ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu mano, puedes enseñarlo. Si lo haces, cura 10 puntos de daño y elimina una Condición Especial de tu Pokémon Activo. Después, descarta este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se hai questo Pokémon in mano, puoi mostrarlo. Se lo fai, cura 10 danni e rimuovi una condizione speciale dal tuo Pokémon attivo. Poi, scarta questo Pokémon.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver em sua mão, você poderá revelá-lo. Se você fizer isso, cure 10 de danos e remova uma Condição Especial do seu Pokémon Ativo. Em seguida descarte este Pokémon.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon auf deinen Ablagestapel legen, falls es auf deiner Hand ist. Wenn du das machst, heile 10 Schadenspunkte und entferne 1 Speziellen Zustand bei deinem Aktiven Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hip Bump",
				fr: "Hanche Amortissante",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280713,
		tcgplayer: 83664
	}
}

export default card

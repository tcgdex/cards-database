import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair",
		es: "Skuntank",
		it: "Skuntank",
		pt: "Skuntank",
		de: "Skuntank"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		435,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Sticky Smokescreen",
				fr: "Brouillard Collant",
				es: "Pantalla de Humo Pegajoso",
				it: "Muro di Fumo Viscoso",
				pt: "Cortina de Fumaça Grudenta",
				de: "Widriger Nebel"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips 2 coins. If either of them is tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance 2 pièces. S’il obtient au moins un côté pile, cette attaque ne fait rien.",
				es: "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 2 monedas. Si sale cruz en alguna de ellas, ese ataque no hace nada.",
				it: "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia due volte una moneta. Se esce almeno una volta croce, quell’attacco non ha effetto.",
				pt: "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará 2 moedas. Se qualquer uma delas sair coroa, aquele ataque não fará nada.",
				de: "Wenn das Verteidigende Pokémon versucht, während des nächsten Zuges deines Gegners anzugreifen, wirft dein Gegner 2 Münzen. Wenn eine oder beide Münzen Zahl zeigen, hat jene Attacke keine Auswirkungen."
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
		cardmarket: 316004,
		tcgplayer: 157693
	}
}

export default card

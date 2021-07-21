import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
		es: "Amoonguss",
		it: "Amoonguss",
		pt: "Amoonguss",
		de: "Hutsassa"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		591,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bursting Spores",
				fr: "Nuée de Spores",
				es: "Esporas Explosivas",
				it: "Esplosione di Spore",
				pt: "Esporos Explosivos",
				de: "Sprengsporen"
			},
			effect: {
				en: "Whenever you play a Pokémon that has the Spore attack from your hand during your turn, you may leave your opponent’s Active Pokémon Asleep and Poisoned.",
				fr: "Chaque fois que vous jouez un Pokémon qui a l’attaque Spore de votre main pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi et Empoisonné.",
				es: "Cada vez que juegues 1 Pokémon que tenga el ataque Espora de tu mano durante tu turno, puedes dejar al Pokémon Activo de tu rival Dormido y Envenenado.",
				it: "Ogni volta che giochi un Pokémon che ha l’attacco Spora dalla tua mano durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario addormentato e avvelenato.",
				pt: "Sempre que você jogar 1 Pokémon que tenha o ataque Esporos da sua mão durante a sua vez de jogar, você pode deixar o Pokémon Ativo do seu oponente Adormecido e Envenenado.",
				de: "Jedes Mal, wenn du während deines Zuges ein Pokémon, das die Attacke Pilzspore hat, aus deiner Hand spielst, kannst du veranlassen, dass das Aktive Pokémon deines Gegners schläft und vergiftet ist."
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
				en: "Venoshock",
				fr: "Choc Venin",
				es: "Carga Tóxica",
				it: "Velenoshock",
				pt: "Venochoque",
				de: "Giftschock"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card

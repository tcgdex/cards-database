import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Amoonguss",
		'fr-fr': "Gaulet",
		'es-es': "Amoonguss",
		'it-it': "Amoonguss",
		'pt-br': "Amoonguss",
		'de-de': "Hutsassa"
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
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bursting Spores",
				'fr-fr': "Nuée de Spores",
				'es-es': "Esporas Explosivas",
				'it-it': "Esplosione di Spore",
				'pt-br': "Esporos Explosivos",
				'de-de': "Sprengsporen"
			},
			effect: {
				'en-us': "Whenever you play a Pokémon that has the Spore attack from your hand during your turn, you may leave your opponent’s Active Pokémon Asleep and Poisoned.",
				'fr-fr': "Chaque fois que vous jouez un Pokémon qui a l’attaque Spore de votre main pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi et Empoisonné.",
				'es-es': "Cada vez que juegues 1 Pokémon que tenga el ataque Espora de tu mano durante tu turno, puedes dejar al Pokémon Activo de tu rival Dormido y Envenenado.",
				'it-it': "Ogni volta che giochi un Pokémon che ha l’attacco Spora dalla tua mano durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario addormentato e avvelenato.",
				'pt-br': "Sempre que você jogar 1 Pokémon que tenha o ataque Esporos da sua mão durante a sua vez de jogar, você pode deixar o Pokémon Ativo do seu oponente Adormecido e Envenenado.",
				'de-de': "Jedes Mal, wenn du während deines Zuges ein Pokémon, das die Attacke Pilzspore hat, aus deiner Hand spielst, kannst du veranlassen, dass das Aktive Pokémon deines Gegners schläft und vergiftet ist."
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
				'en-us': "Venoshock",
				'fr-fr': "Choc Venin",
				'es-es': "Carga Tóxica",
				'it-it': "Velenoshock",
				'pt-br': "Venochoque",
				'de-de': "Giftschock"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Poisoned, this attack does 70 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 70 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 70 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "They show off their Poké Ball caps to lure prey, but very few Pokémon are fooled by this.",
	},

	thirdParty: {
		cardmarket: 387902,
		tcgplayer: 194930
	}
}

export default card

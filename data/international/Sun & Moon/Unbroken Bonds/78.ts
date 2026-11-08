import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'es-es': "Mismagius",
		'it-it': "Mismagius",
		'pt-br': "Mismagius",
		'de-de': "Traunmagil"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		429,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mysterious Message",
				'fr-fr': "Message Mystérieux",
				'es-es': "Mensaje Misterioso",
				'it-it': "Messaggio Segreto",
				'pt-br': "Mensagem Misteriosa",
				'de-de': "Geheimnisvolle Botschaft"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw cards until you have 7 cards in your hand. If you drew any cards in this way, this Pokémon is Knocked Out.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à avoir 7 cartes en main. Si vous avez pioché des cartes de cette façon, ce Pokémon est mis K.O.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 7 cartas en tu mano. Si has robado alguna carta de esta manera, este Pokémon queda Fuera de Combate.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere sette carte in mano. Se hai pescato delle carte in questo modo, questo Pokémon viene messo KO.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar cartas até ter 7 cartas na sua mão. Se comprar qualquer carta desta forma, este Pokémon será Nocauteado.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du so lang Karten ziehen, bis du 7 Karten auf deiner Hand hast. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, ist dieses Pokémon kampfunfähig."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Feared for its wrath and the curses it spreads, this Pokémon will also, on a whim, cast spells that help people.",
	},

	thirdParty: {
		cardmarket: 372366,
		tcgplayer: 189178
	}
}

export default card

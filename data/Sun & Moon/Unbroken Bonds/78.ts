import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Magirêve",
		es: "Mismagius",
		it: "Mismagius",
		pt: "Mismagius",
		de: "Traunmagil"
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
		en: "Misdreavus",
		fr: "Feuforêve",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mysterious Message",
				fr: "Message Mystérieux",
				es: "Mensaje Misterioso",
				it: "Messaggio Segreto",
				pt: "Mensagem Misteriosa",
				de: "Geheimnisvolle Botschaft"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 7 cards in your hand. If you drew any cards in this way, this Pokémon is Knocked Out.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à avoir 7 cartes en main. Si vous avez pioché des cartes de cette façon, ce Pokémon est mis K.O.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 7 cartas en tu mano. Si has robado alguna carta de esta manera, este Pokémon queda Fuera de Combate.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare fino ad avere sette carte in mano. Se hai pescato delle carte in questo modo, questo Pokémon viene messo KO.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar cartas até ter 7 cartas na sua mão. Se comprar qualquer carta desta forma, este Pokémon será Nocauteado.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du so lang Karten ziehen, bis du 7 Karten auf deiner Hand hast. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, ist dieses Pokémon kampfunfähig."
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
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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



}

export default card

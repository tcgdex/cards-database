import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
		es: "Shiinotic",
		it: "Shiinotic",
		pt: "Shiinotic",
		de: "Lamellux"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		756,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Illuminate",
				fr: "Lumiattirance",
				es: "Iluminación",
				it: "Risplendi",
				pt: "Iluminação",
				de: "Erleuchtung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Fairy Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Fairy dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 Pokémon Fairy, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon Fairy, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 Pokémon Fairy no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Fairy-Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Flickering Spores",
				fr: "Spores Scintillantes",
				es: "Esporas Parpadeantes",
				it: "Spore Guizzanti",
				pt: "Esporos Tremeluzentes",
				de: "Flimmernde Sporen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card

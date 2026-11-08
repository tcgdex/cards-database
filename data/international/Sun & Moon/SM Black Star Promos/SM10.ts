import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Shiinotic",
		'fr-fr': "Lampignon",
		'es-es': "Shiinotic",
		'it-it': "Shiinotic",
		'pt-br': "Shiinotic",
		'de-de': "Lamellux"
	},
	illustrator: "Mizue",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		756,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		'en-us': "Morelull",
		'fr-fr': "Spododo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Illuminate",
				'fr-fr': "Lumiattirance",
				'es-es': "Iluminación",
				'it-it': "Risplendi",
				'pt-br': "Iluminação",
				'de-de': "Erleuchtung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 Pokémon Grass, enseñarlo y ponerlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo un Pokémon Grass, mostrarlo e aggiungerlo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 Pokémon Grass no seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Grass-Pokémon durchsuchen, es deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
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
				'en-us': "Flickering Spores",
				'fr-fr': "Spores Scintillantes",
				'es-es': "Esporas Parpadeantes",
				'it-it': "Spore Guizzanti",
				'pt-br': "Esporos Tremeluzentes",
				'de-de': "Flimmernde Sporen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

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
		'en-us': "It emits flickering spores that cause drowsiness. When its prey succumb to sleep, this Pokémon feeds on them by sucking in their energy.",
	},
}

export default card

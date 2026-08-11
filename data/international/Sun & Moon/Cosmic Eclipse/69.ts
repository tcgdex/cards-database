import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Call Signal",
				'fr-fr': "Signal d’Appel",
				'es-es': "Señal de Atracción",
				'it-it': "Cerca Segnale",
				'pt-br': "Sinal de Chamada",
				'de-de': "Rufsignal"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for up to 3 Supporter cards, reveal them, and put them into your hand. Then, shuffle your deck. If you searched your deck in this way, this Pokémon is Knocked Out.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher jusqu’à 3 cartes Supporter dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck. Si vous avez cherché votre deck de cette façon, ce Pokémon est mis K.O.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja hasta 3 cartas de Partidario, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja. Si has buscado en tu baraja de esta manera, este Pokémon queda Fuera de Combate.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo fino a tre carte Aiuto, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Se hai cercato nel tuo mazzo in questo modo, questo Pokémon viene messo KO.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por até 3 cartas de Apoiador no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho. Se você procurar no seu baralho desta forma, este Pokémon será Nocauteado.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach bis zu 3 Unterstützerkarten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Wenn du auf diese Weise dein Deck durchsucht hast, ist dieses Pokémon kampfunfähig."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Blast",
				'fr-fr': "Explosion Magnétique",
				'es-es': "Explosión Magnética",
				'it-it': "Magnetebomba",
				'pt-br': "Explosão Magnética",
				'de-de': "Magnetstoß"
			},

			damage: 50,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Delicate equipment can malfunction in areas inhabited by Magneton, which send out mysterious electrical signals.",
	},

	thirdParty: {
		cardmarket: 407994,
		tcgplayer: 201243
	}
}

export default card

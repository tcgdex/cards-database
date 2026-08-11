import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'fr-fr': "Rongrigou-ex",
		'en-us': "Greedent ex",
		'es-es': "Greedent ex",
		'it-it': "Greedent-ex",
		'pt-br': "Greedent ex",
		'de-de': "Schlaraffel-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Rongourmand",
		'en-us': "Skwovet",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Jamais Assez",
			'en-us': "Never Ever Enough",
			'es-es': "Nunca es Suficiente",
			'it-it': "Mai Abbastanza",
			'pt-br': "Nunca Nunquinha Suficiente",
			'de-de': "Nimmersatt"
		},

		effect: {
			'fr-fr': "Regardez les 3 cartes du dessus de votre deck. Vous pouvez ajouter ces cartes à votre main. Sinon, défaussez ces cartes et piochez 3 cartes.",
			'en-us': "Look at the top 3 cards of your deck. You may put those cards into your hand. If you don't, discard those cards and draw 3 cards.",
			'es-es': "Mira las 3 primeras cartas de tu baraja. Puedes poner esas cartas en tu mano. Si no lo haces, descarta esas cartas y roba 3 cartas.",
			'it-it': "Guarda le prime tre carte del tuo mazzo. Puoi aggiungere quelle carte a quelle che hai in mano. Se non lo fai, scarta quelle carte e pescane tre.",
			'pt-br': "Olhe as 3 cartas de cima do seu baralho. Você pode colocar aquelas cartas na sua mão. Se não fizer isto, descarte aquelas cartas e compre 3 cartas.",
			'de-de': "Schau dir die obersten 3 Karten deines Decks an. Du kannst jene Karten auf deine Hand nehmen. Wenn du das nicht machst, lege jene Karten auf deinen Ablagestapel und ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Glissé-Roulé",
			'en-us': "Slip 'n' Roll",
			'es-es': "Resbalar y Rodar",
			'it-it': "Rotoloscivolo",
			'pt-br': "Deslizar e Rolar",
			'de-de': "Rutschrolle"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Glissé-Roulé.",
			'en-us': "During your next turn, this Pokémon can't use Slip 'n' Roll.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Resbalar y Rodar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Rotoloscivolo.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Deslizar e Rolar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Rutschrolle nicht einsetzen."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725259,
				tcgplayer: 509759,
				cardtrader: 256075
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card

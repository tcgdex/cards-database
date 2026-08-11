import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [400],
	set: Set,

	name: {
		'en-us': "Bibarel",
		'fr-fr': "Castorno",
		'es-es': "Bibarel",
		'it-it': "Bibarel",
		'pt-br': "Bibarel",
		'de-de': "Bidifas"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'pt-br': "Bidoof",
		'de-de': "Bidiza"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Reassuring Dam",
			'fr-fr': "Barrage Réconfortant",
			'es-es': "Presa Tranquilizadora",
			'it-it': "Diga Rassicurante",
			'pt-br': "Represa Reconfortante",
			'de-de': "Beruhigender Damm"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, cards in your deck can't be discarded by effects of your opponent's attacks, Abilities, Item cards, or Supporter cards.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, les cartes dans votre deck ne peuvent pas être défaussées par les effets des attaques, talents, cartes Objet ou cartes Supporter de votre adversaire.",
			'es-es': "Mientras este Pokémon esté en tu Banca, las cartas de tu baraja no se pueden descartar por los efectos de los ataques, habilidades, cartas de Objeto o cartas de Partidario de tu rival.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, le carte del tuo mazzo non possono essere scartate per effetto degli attacchi, delle abilità, delle carte Strumento o delle carte Aiuto del tuo avversario.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, cartas no seu baralho não poderão ser descartadas por efeitos de ataques, Habilidades, cartas de Item ou cartas de Apoiador do seu oponente.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, können Karten in deinem Deck nicht durch Effekte von Attacken, Fähigkeiten, Itemkarten oder Unterstützerkarten deines Gegners auf den Ablagestapel gelegt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665283,
				tcgplayer: 276983
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665283,
				tcgplayer: 276983
			}
		},
	],
}

export default card

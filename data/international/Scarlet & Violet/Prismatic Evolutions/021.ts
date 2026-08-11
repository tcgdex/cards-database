import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [119],
	set: Set,

	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'es-es': "Seaking",
		'pt-br': "Seaking",
		'it-it': "Seaking",
		'de-de': "Golking"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'es-es': "Goldeen",
		'pt-br': "Goldeen",
		'it-it': "Goldeen",
		'de-de': "Goldini"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Festival Lead",
			'fr-fr': "Tête de la Fête",
			'es-es': "Líder del Festival",
			'pt-br': "Líder de Festas",
			'it-it': "Maestro della Festa",
			'de-de': "Festmeister"
		},

		effect: {
			'en-us': "If Festival Grounds is in play, this Pokémon may use an attack it has twice. If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.",
			'fr-fr': "Si Lieu de la Fête est en jeu, ce Pokémon peut attaquer deux fois en utilisant ses attaques. Si la première attaque met K.O. le Pokémon Actif de votre adversaire, une fois que votre adversaire a choisi un nouveau Pokémon Actif, vous pouvez encore attaquer.",
			'es-es': "Si Recinto del Festival está en juego, este Pokémon puede atacar dos veces usando los ataques que tenga. Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo.",
			'pt-br': "Se Praça de Festas estiver em jogo, este Pokémon poderá usar duas vezes um ataque que ele tem. Se o primeiro ataque Nocautear o Pokémon Ativo do seu oponente, você poderá atacar novamente após seu oponente escolher um novo Pokémon Ativo.",
			'it-it': "Se c'è in gioco Area della Festa, questo Pokémon può attaccare due volte usando gli attacchi che ha. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario ha scelto un nuovo Pokémon attivo.",
			'de-de': "Wenn Festplatz im Spiel ist, kann dieses Pokémon die Attacken, die es hat, einsetzen, um zweimal anzugreifen. Wenn die erste Attacke das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon gewählt hat."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rapid Draw",
			'fr-fr': "Pioche Rapide",
			'es-es': "Robo Rápido",
			'pt-br': "Retirada Rápida",
			'it-it': "Pescalesto",
			'de-de': "Schnellzieher"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'pt-br': "Compre 2 cartas.",
			'it-it': "Pesca due carte.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Nelnal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805410,
				tcgplayer: 610376
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805410,
				tcgplayer: 610376
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806438,
				tcgplayer: 610551
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806439,
				tcgplayer: 610652
			}
		},
	],
}

export default card

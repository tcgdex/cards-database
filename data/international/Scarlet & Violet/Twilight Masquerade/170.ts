import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1011],
	set: Set,

	name: {
		'en-us': "Dipplin",
		'fr-fr': "Pomdramour",
		'es-es': "Dipplin",
		'it-it': "Dipplin",
		'pt-br': "Dipplin",
		'de-de': "Sirapfel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Festival Lead",
			'fr-fr': "Tête de la Fête",
			'es-es': "Líder del Festival",
			'it-it': "Maestro della Festa",
			'pt-br': "Líder de Festas",
			'de-de': "Festmeister"
		},

		effect: {
			'en-us': "If Festival Grounds is in play, this Pokémon may use an attack it has twice. If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.",
			'fr-fr': "Si Lieu de la Fête est en jeu, ce Pokémon peut attaquer deux fois en utilisant ses attaques. Si la première attaque met K.O. le Pokémon Actif de votre adversaire, une fois que votre adversaire a choisi un nouveau Pokémon Actif, vous pouvez encore attaquer.",
			'es-es': "Si Recinto del Festival está en juego, este Pokémon puede atacar dos veces usando los ataques que tenga. Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo.",
			'it-it': "Se c'è in gioco Area della Festa, questo Pokémon può attaccare due volte usando gli attacchi che ha. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario ha scelto un nuovo Pokémon attivo.",
			'pt-br': "Se Praça de Festas estiver em jogo, este Pokémon poderá usar duas vezes um ataque que ele tem. Se o primeiro ataque Nocautear o Pokémon Ativo do seu oponente, você poderá atacar novamente após seu oponente escolher um novo Pokémon Ativo.",
			'de-de': "Wenn Festplatz im Spiel ist, kann dieses Pokémon die Attacken, die es hat, einsetzen, um zweimal anzugreifen. Wenn die erste Attacke das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon gewählt hat."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Do the Wave",
			'fr-fr': "Faites la Vague",
			'es-es': "Hacer la Ola",
			'it-it': "Fare la Ola",
			'pt-br': "Fazer a Ola",
			'de-de': "Wellenreiten"
		},

		effect: {
			'en-us': "This attack does 20 damage for each of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon no Banco.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "The head sticking out belongs to the fore-wyrm, while the tail belongs to the core-wyrm. The two share one apple and help each other out.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769344,
				tcgplayer: 550214
			}
		},
	],

	illustrator: "Akira Komayama",

}

export default card
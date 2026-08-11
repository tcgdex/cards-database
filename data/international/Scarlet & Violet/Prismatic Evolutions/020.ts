import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [118],
	set: Set,

	name: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'es-es': "Goldeen",
		'pt-br': "Goldeen",
		'it-it': "Goldeen",
		'de-de': "Goldini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

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
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Whirlpool",
			'fr-fr': "Siphon",
			'es-es': "Torbellino",
			'pt-br': "Redemoinho",
			'it-it': "Mulinello",
			'de-de': "Whirlpool"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "saino misaki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805409,
				tcgplayer: 610375
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805409,
				tcgplayer: 610375
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806436,
				tcgplayer: 610550
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806437,
				tcgplayer: 610651
			}
		},
	],
}

export default card

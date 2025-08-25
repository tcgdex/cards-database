import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1011],
	set: Set,

	name: {
		en: "Dipplin",
		fr: "Pomdramour",
		es: "Dipplin",
		it: "Dipplin",
		pt: "Dipplin",
		de: "Sirapfel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Festival Lead",
			fr: "Tête de la Fête",
			es: "Líder del Festival",
			it: "Maestro della Festa",
			pt: "Líder de Festas",
			de: "Festmeister"
		},

		effect: {
			en: "If Festival Grounds is in play, this Pokémon may use an attack it has twice. If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.",
			fr: "Si Lieu de la Fête est en jeu, ce Pokémon peut attaquer deux fois en utilisant ses attaques. Si la première attaque met K.O. le Pokémon Actif de votre adversaire, une fois que votre adversaire a choisi un nouveau Pokémon Actif, vous pouvez encore attaquer.",
			es: "Si Recinto del Festival está en juego, este Pokémon puede atacar dos veces usando los ataques que tenga. Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo.",
			it: "Se c'è in gioco Area della Festa, questo Pokémon può attaccare due volte usando gli attacchi che ha. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario ha scelto un nuovo Pokémon attivo.",
			pt: "Se Praça de Festas estiver em jogo, este Pokémon poderá usar duas vezes um ataque que ele tem. Se o primeiro ataque Nocautear o Pokémon Ativo do seu oponente, você poderá atacar novamente após seu oponente escolher um novo Pokémon Ativo.",
			de: "Wenn Festplatz im Spiel ist, kann dieses Pokémon die Attacken, die es hat, einsetzen, um zweimal anzugreifen. Wenn die erste Attacke das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon gewählt hat."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Do the Wave",
			fr: "Faites la Vague",
			es: "Hacer la Ola",
			it: "Fare la Ola",
			pt: "Fazer a Ola",
			de: "Wellenreiten"
		},

		effect: {
			en: "This attack does 20 damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua panchina.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon no Banco.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Saboteri",

	thirdParty: {
		cardmarket: 769192
	}
}

export default card
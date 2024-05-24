import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

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
		cost: ["Psychic"],

		name: {
			en: "Sneaky Placement",
			fr: "Placement Vicieux",
			es: "Colocación Furtiva",
			it: "Furtivappoggio",
			pt: "Posição Sorrateira",
			de: "Heimlichtuerei"
		},

		effect: {
			en: "Put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			es: "Pon 2 contadores de daño en uno de los Pokémon de tu rival.",
			it: "Metti due segnalini danno su uno dei Pokémon del tuo avversario.",
			pt: "Coloque 2 contadores de dano em 1 dos Pokémon do seu oponente.",
			de: "Lege 2 Schadensmarken auf 1 Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
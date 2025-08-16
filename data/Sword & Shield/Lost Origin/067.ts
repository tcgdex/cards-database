import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [122],
	set: Set,

	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime",
		de: "Pantimos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Tricky Slap",
			fr: "Gifle Rusée",
			es: "Bofetada Astuta",
			it: "Sberla Ingannevole",
			pt: "Tapa Ardiloso",
			de: "Listiger Klatscher"
		},

		effect: {
			en: "You and your opponent play Rock-Paper-Scissors until someone wins. If you win, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			fr: "Vous et votre adversaire jouez à pierre-ciseaux-feuille jusqu'à avoir un gagnant. Si vous gagnez, pendant le prochain tour de votre adversaire, vous évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			es: "Tu rival y tú jugáis a piedra, papel o tijera hasta que gane uno de los dos. Si ganas tú, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Tu e il tuo avversario giocate a morra cinese finché uno dei due non vince. Se vinci, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			pt: "Você e seu oponente jogam \"pedra, papel e tesoura\" até alguém vencer. Se você vencer, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			de: "Du und dein Gegner spielt Schere/Stein/Papier, bis jemand gewinnt. Wenn du gewinnst, verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674076,
		tcgplayer: 283942
	}
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Slaking ex",
		fr: "Monaflèmit-ex",
		es: "Slaking ex",
		it: "Slaking-ex",
		pt: "Slaking ex",
		de: "Letarking-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Born to Slack",
			fr: "Procrastinateur-Né",
			es: "Holgazán Nato",
			it: "Pigrizia Innata",
			pt: "Preguiça de Nascença",
			de: "Meister der Lethargie"
		},

		effect: {
			en: "If your opponent has no Pokémon ex or Pokémon V in play, this Pokémon can't attack.",
			fr: "Si votre adversaire n'a aucun Pokémon-ex ni Pokémon-V en jeu, ce Pokémon ne peut pas attaquer.",
			es: "Si tu rival no tiene ningún Pokémon ex o Pokémon V en juego, este Pokémon no puede atacar.",
			it: "Se il tuo avversario non ha Pokémon-ex o Pokémon-V in gioco, questo Pokémon non può attaccare.",
			pt: "Se o seu oponente não tiver Pokémon ex ou Pokémon V em jogo, este Pokémon não poderá atacar.",
			de: "Wenn dein Gegner kein Pokémon-ex oder Pokémon-V im Spiel hat, kann dieses Pokémon nicht angreifen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Great Swing",
			fr: "Grande Frappe",
			es: "Golpe Excelente",
			it: "Colpo Immane",
			pt: "Murrão",
			de: "Riesiger Rundschlag"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 280
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon",
		fr: "Nymphali",
		es: "Sylveon",
		pt: "Sylveon",
		it: "Sylveon",
		de: "Feelinara"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Safeguard",
			fr: "Rune Protect",
			es: "Velo Sagrado",
			pt: "Salvaguarda",
			it: "Salvaguardia",
			de: "Bodyguard"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex de votre adversaire.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex de tu rival.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex do seu oponente.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex del tuo avversario.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			pt: "Tiro Mágico",
			it: "Magicolpo",
			de: "Magischer Schuss"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "MINAMINAMI Take"
}

export default card
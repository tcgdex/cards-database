import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [778],
	set: Set,

	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		pt: "Mimikyu",
		de: "Mimigma"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Safeguard",
			fr: "Rune Protect",
			es: "Velo Sagrado",
			it: "Salvaguardia",
			pt: "Salvaguarda",
			de: "Bodyguard"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex and Pokémon V.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex et des Pokémon-V de votre adversaire.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex y Pokémon V de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex e dei Pokémon-V del tuo avversario.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex e Pokémon V do seu oponente.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex und Pokémon-V deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Ghost Eye",
			fr: "Œil Fantôme",
			es: "Ojo Fantasmal",
			it: "Sguardo Spettrale",
			pt: "Olhar Fantasma",
			de: "Geisterauge"
		},

		effect: {
			en: "Put 7 damage counters on your opponent's Active Pokémon.",
			fr: "Placez 7 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Pon 7 contadores de daño en el Pokémon Activo de tu rival.",
			it: "Metti sette segnalini danno sul Pokémon attivo del tuo avversario.",
			pt: "Coloque 7 contadores de dano no Pokémon Ativo do seu oponente.",
			de: "Lege 7 Schadensmarken auf das Aktive Pokémon deines Gegners."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
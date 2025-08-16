import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		en: "Glaceon VSTAR",
		fr: "Givrali VSTAR",
		es: "Glaceon V-ASTRO",
		it: "Glaceon V ASTRO",
		pt: "Glaceon V-ASTRO",
		de: "Glaziola VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	evolveFrom: {
		en: "Glaceon V",
		fr: "Givrali-V",
		es: "Glaceon V",
		it: "Glaceon-V",
		pt: "Glaceon V",
		de: "Glaziola-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Icicle Shot",
			fr: "Coup Stalactite",
			es: "Disparo Témpano",
			it: "Colpo Stalattite",
			pt: "Disparo Congelado",
			de: "Eiszapfenschuss"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 180
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Crystal Star",
			fr: "Cristal Star",
			es: "Astro Cristal",
			it: "Astro Cristallo",
			pt: "Cristal Astral",
			de: "Kristallstern"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
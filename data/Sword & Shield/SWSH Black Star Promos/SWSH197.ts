import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		fr: "Givrali VSTAR",
		de: "Glaziola VSTAR",
		es: "Glaceon V-ASTRO",
		pt: "Glaceon V-ASTRO",
		it: "Glaceon V ASTRO",
		en: "Glaceon VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	evolveFrom: {
		fr: "Givrali-V",
		de: "Glaziola-V",
		es: "Glaceon V",
		pt: "Glaceon V",
		it: "Glaceon-V",
		en: "Glaceon V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Coup Stalactite",
			de: "Eiszapfenschuss",
			es: "Disparo Témpano",
			pt: "Disparo Congelado",
			it: "Colpo Stalattite",
			en: "Icicle Shot"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 180
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Cristal Star",
			de: "Kristallstern",
			es: "Astro Cristal",
			pt: "Cristal Astral",
			it: "Astro Cristallo",
			en: "Crystal Star"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			es: "Durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			it: "Durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			en: "During your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 604999
	}
}

export default card
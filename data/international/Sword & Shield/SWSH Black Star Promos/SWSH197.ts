import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'fr-fr': "Givrali VSTAR",
		'de-de': "Glaziola VSTAR",
		'es-es': "Glaceon V-ASTRO",
		'pt-br': "Glaceon V-ASTRO",
		'it-it': "Glaceon V ASTRO",
		'en-us': "Glaceon VSTAR"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Givrali-V",
		'de-de': "Glaziola-V",
		'es-es': "Glaceon V",
		'pt-br': "Glaceon V",
		'it-it': "Glaceon-V",
		'en-us': "Glaceon V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Coup Stalactite",
			'de-de': "Eiszapfenschuss",
			'es-es': "Disparo Témpano",
			'pt-br': "Disparo Congelado",
			'it-it': "Colpo Stalattite",
			'en-us': "Icicle Shot"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 180
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Cristal Star",
			'de-de': "Kristallstern",
			'es-es': "Astro Cristal",
			'pt-br': "Cristal Astral",
			'it-it': "Astro Cristallo",
			'en-us': "Crystal Star"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			'en-us': "During your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 604999
	}
}

export default card

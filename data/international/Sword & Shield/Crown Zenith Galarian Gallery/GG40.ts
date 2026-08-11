import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [471],
	set: Set,

	name: {
		'en-us': "Glaceon VSTAR",
		'fr-fr': "Givrali VSTAR",
		'es-es': "Glaceon V-ASTRO",
		'it-it': "Glaceon V ASTRO",
		'pt-br': "Glaceon V-ASTRO",
		'de-de': "Glaziola VSTAR"
	},

	illustrator: "Gemi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Glaceon V",
		'fr-fr': "Givrali-V",
		'es-es': "Glaceon V",
		'it-it': "Glaceon-V",
		'pt-br': "Glaceon V",
		'de-de': "Glaziola-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Icicle Shot",
			'fr-fr': "Coup Stalactite",
			'es-es': "Disparo Témpano",
			'it-it': "Colpo Stalattite",
			'pt-br': "Disparo Congelado",
			'de-de': "Eiszapfenschuss"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 180
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Crystal Star",
			'fr-fr': "Cristal Star",
			'es-es': "Astro Cristal",
			'it-it': "Astro Cristallo",
			'pt-br': "Cristal Astral",
			'de-de': "Kristallstern"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
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


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691920,
				tcgplayer: 477061
			}
		},
	],
}

export default card

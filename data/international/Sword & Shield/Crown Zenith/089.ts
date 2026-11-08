import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [306],
	set: Set,

	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'es-es': "Aggron",
		'it-it': "Aggron",
		'pt-br': "Aggron",
		'de-de': "Stolloss"
	},

	illustrator: "GOSSAN",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'es-es': "Lairon",
		'it-it': "Lairon",
		'pt-br': "Lairon",
		'de-de': "Stollrak"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Counter Press",
			'fr-fr': "Contre-Pression",
			'es-es': "Presión Contraataque",
			'it-it': "Contropressa",
			'pt-br': "Contra-ataque Apertado",
			'de-de': "Konterdruck"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents aux dégâts infligés à ce Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon una cantidad de contadores de daño en el Pokémon Atacante equivalente al daño infligido a este Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sul Pokémon attaccante dei segnalini danno pari ai danni inflitti a questo Pokémon.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque contadores de dano no Pokémon Atacante equivalentes ao dano causado a este Pokémon.",
			'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege der Höhe des diesem Pokémon zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 90
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Aggron has a horn sharp enough to perforate thick iron sheets. It brings down its opponents by ramming into them horn first.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691807,
				tcgplayer: 478226
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691807,
				tcgplayer: 478226
			}
		},
	],
}

export default card

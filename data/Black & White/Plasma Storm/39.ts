import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Jellicent",
		fr: "Moyade",
		es: "Jellicent",
		it: "Jellicent",
		pt: "Jellicent",
		de: "Apoquallyp"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		593,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Spiteful Spirit",
				fr: "Esprit Malveillant",
				es: "Espíritu Malvado",
				it: "Sferza",
				pt: "Espírito Maldoso",
				de: "Tückischer Geist"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent’s attack, the Attacking Pokémon is now Confused and Poisoned.",
				fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, le Pokémon Attaquant est maintenant Confus et Empoisonné.",
				es: "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, el Pokémon Atacante pasa a estar Confundido y Envenenado.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene messo K.O. dai danni inflitti da un attacco del tuo avversario, il Pokémon attaccante viene confuso e avvelenato.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for Nocauteado por danos causados pelo ataque de um oponente, o Pokémon Atacante ficará Confuso e Envenenado.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden eines gegnerischen Angriffs kampfunfähig wird, ist das Angreifende Pokémon jetzt verwirrt und vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Bullet",
				fr: "Aquaballe",
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280779,
		tcgplayer: 86308
	}
}

export default card

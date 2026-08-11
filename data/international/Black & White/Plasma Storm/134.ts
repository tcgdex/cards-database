import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lugia-EX",
		fr: "Lugia-EX",
		es: "Lugia-EX",
		it: "Lugia-EX",
		pt: "Lugia-EX",
		de: "Lugia-EX"
	},
	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Overflow",
				fr: "Débordement",
				es: "Superávit",
				it: "Eccedenza",
				pt: "Transbordo",
				de: "Extrapreis"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d’une attaque de ce Pokémon, récupérez 1 carte Récompense supplémentaire.",
				es: "Si el Pokémon de tu rival queda Fuera de Combate por el daño de un ataque de este Pokémon, coge 1 carta de Premio más.",
				it: "Se un Pokémon del tuo avversario viene messo K.O. dal danno di un attacco di questo Pokémon, prendi una carta Premio in più.",
				pt: "Se o Pokémon do seu oponente for Nocauteado por danos causados pelo ataque deste Pokémon, pegue mais 1 card de Prêmio.",
				de: "Wenn das Pokémon deines Gegners durch Schaden eines Angriffs dieses Pokémon kampfunfähig wird, nimm 1 zusätzliche Preiskarte."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plasma Gale",
				fr: "Bourrasque Plasma",
			},
			effect: {
				en: "Discard a Plasma Energy attached to this Pokémon. If you can't discard a Plasma Energy, this attack does nothing.",
				fr: "Défaussez une Énergie Plasma attachée à ce Pokémon. Si vous ne pouvez pas défausser une Énergie Plasma, cette attaque ne fait rien.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card

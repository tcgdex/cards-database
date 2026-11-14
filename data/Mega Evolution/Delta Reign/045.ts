import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Giratina",
		fr: "Giratina",
		de: "Giratina",
		es: "Giratina",
		it: "Giratina",
		pt: "Giratina",
		'es-mx': "Giratina"
	},

	illustrator: "toriyufu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Chaos Crawler",
			fr: "Mille‑Pattes du Chaos",
			de: "Chaoskriecher",
			es: "Serpenteo Caótico",
			it: "Arrampicaos",
			pt: "Caos Rastejante",
			'es-mx': "Arrastre Caótico"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage from attacks done to this Pokémon. If 1 of your Pokémon used Chaos Crawler during your last turn, this attack can't be used.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts provenant d'attaques infligés à ce Pokémon. Si l'un de vos Pokémon a utilisé Mille‑Pattes du Chaos pendant votre dernier tour, cette attaque ne peut pas être utilisée.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden durch Attacken, der diesem Pokémon zugefügt wird. Wenn 1 deiner Pokémon während deines letzten Zuges Chaoskriecher eingesetzt hat, kann diese Attacke nicht eingesetzt werden.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño de los ataques infligido a este Pokémon. Si uno de tus Pokémon usó Serpenteo Caótico durante tu último turno, este ataque no se puede usar.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni degli attacchi inflitti a questo Pokémon. Se uno dei tuoi Pokémon ha usato Arrampicaos durante il tuo ultimo turno, questo attacco non può essere usato.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano de ataques causado a este Pokémon. Se 1 dos seus Pokémon usou Caos Rastejante durante o seu último turno, este ataque não poderá ser usado.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño de los ataques infligido a este Pokémon. Si 1 de tus Pokémon usó Arrastre Caótico durante tu último turno, este ataque no se puede usar."
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726527,
				cardmarket: 918865
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726527,
				cardmarket: 918865
			}
		}
	],
}

export default card
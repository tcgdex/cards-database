import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Ampharos",
		fr: "Pharamp",
		es: "Ampharos",
		it: "Ampharos",
		pt: "Ampharos",
		de: "Ampharos"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie"
	},

	attacks: [{
		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			it: "Tuonoshock",
			pt: "Trovoada de Choques",
			de: "Donnerschock"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Searchlight Tail",
			fr: "Queue de Projecteur",
			es: "Cola Reflectora",
			it: "Codaluce",
			pt: "Cauda de Farol",
			de: "Suchlichtschweif"
		},

		effect: {
			en: "Your opponent reveals their hand. If you find any Energy cards there, this attack does 90 more damage.",
			fr: "Votre adversaire dévoile sa main. Si vous y trouvez au moins une carte Énergie, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Tu rival enseña las cartas de su mano. Si encuentras alguna carta de Energía entre ellas, este ataque hace 90 puntos de daño más.",
			it: "Il tuo avversario mostra le carte che ha in mano. Se ci trovi delle carte Energia, questo attacco infligge 90 danni in più.",
			pt: "Seu oponente revela a própria mão. Se você encontrar alguma carta de Energia lá, este ataque causará 90 pontos de dano a mais.",
			de: "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Energiekarte findest, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card
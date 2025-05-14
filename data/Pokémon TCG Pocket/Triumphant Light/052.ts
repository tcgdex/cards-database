import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		de: "Toxiquak",
		'pt-br': "Toxicroak",
		ko: "독개굴"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Croagunk"
	},

	description: {
		en: "Swaying and dodging the attacks of its foes, it weaves its flexible body in close, then lunges out with its poisonous claws.",
		fr: "Il esquive avec souplesse les attaques de ses\nadversaires tout en bondissant dans leur direction,\npuis il riposte de ses griffes empoisonnées.",
		es: "Esquiva ágilmente los ataques de sus\nenemigos mientras va acortando distancias\npara contraatacar con sus garras venenosas.",
		it: "Con il suo corpo flessibile schiva l'attacco del\nnemico e lo trafigge al volo con spine velenose.",
		de: "Mit seinem geschmeidigen Körper weicht es\nAttacken aus und durchbricht die Deckung des\nGegners, um mit seinen Giftklauen zuzustechen.",
		'pt-br': "Balançando e desviando dos ataques dos inimigos,\neste Pokémon usa seu corpo flexível para se aproximar\ne, em seguida, atacar com suas garras venenosas.",
		ko: "유연한 몸으로 상대의 공격을 피하며\n깊숙이 뛰어들어 독가시를 꿰찌른다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Toxic",
			fr: "Toxik",
			es: "Tóxico",
			it: "Tossina",
			de: "Toxin",
			'pt-br': "Tóxico",
			ko: "맹독"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. Do 20 damage to this Pokémon instead of the usual amount for this Special Condition.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Poisoned. Infligez 20 dégâts à ce Pokémon au lieu de la quantité habituelle pour cet État Spécial.",
			es: "El Pokémon Activo de tu rival pasa a estar Poisoned. Ese Pokémon sufre 20 puntos de daño en vez de la cantidad habitual por esta Condición Especial.",
			it: "Il Pokémon attivo del tuo avversario viene Poisoned. Infliggi 20 danni a quel Pokémon invece della quantità normalmente prevista per questa condizione speciale.",
			de: "Das Aktive Pokémon deines Gegners [Text:SpecialCondition v0=\"ist jetzt {}\" v1=\"{} jetzt\" ]. Füge dem Pokémon 20 Schadenspunkte zu anstelle der für diesen Speziellen Zustand üblichen Menge an Schadenspunkten.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Poisoned. Cause 20 pontos de dano a este Pokémon em vez da quantidade normal desta Condição Especial.",
			ko: "상대의 배틀 포켓몬을 PoisonedPoisoned로 만든다. 이 Poisoned의 데미지는 20이 된다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card

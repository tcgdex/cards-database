import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		pt: "Mr. Mime"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Look-Alike Show",
			fr: "Spectacle de Sosies",
			es: "Parecidos Razonables",
			it: "Spettacolo del Sosia",
			pt: "Show de Imitação"
		},

		effect: {
			en: "Your opponent reveals their hand. You may use the effect of a Supporter card you find there as the effect of this attack.",
			fr: "Votre adversaire montre sa main. Vous pouvez utiliser l'effet d'une carte Supporter que vous y trouvez en tant qu'effet de cette attaque.",
			es: "Tu rival enseña las cartas de su mano. Puedes usar el efecto de una carta de Partidario que encuentres entre ellas como efecto de este ataque.",
			it: "Il tuo avversario mostra le carte che ha in mano. Puoi usare l'effetto di una carta Aiuto presente tra esse come effetto di questo attacco.",
			pt: "Seu oponente revela a mão dele. Você pode usar o efeito de uma carta de Apoiador que encontrar lá como o efeito deste ataque."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Eerie Wave",
			fr: "Vague Étrange",
			es: "Onda Sobrecogedora",
			it: "Ondamistero",
			pt: "Onda Misteriosa"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
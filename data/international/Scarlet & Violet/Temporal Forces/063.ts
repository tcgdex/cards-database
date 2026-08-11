import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [122],
	set: Set,

	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'es-es': "Mr. Mime",
		'it-it': "Mr. Mime",
		'pt-br': "Mr. Mime",
		'de-de': "Pantimos"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Look-Alike Show",
			'fr-fr': "Spectacle de Sosies",
			'es-es': "Parecidos Razonables",
			'it-it': "Spettacolo del Sosia",
			'pt-br': "Show de Imitação",
			'de-de': "Doppelgänger-Show"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. You may use the effect of a Supporter card you find there as the effect of this attack.",
			'fr-fr': "Votre adversaire montre sa main. Vous pouvez utiliser l'effet d'une carte Supporter que vous y trouvez en tant qu'effet de cette attaque.",
			'es-es': "Tu rival enseña las cartas de su mano. Puedes usar el efecto de una carta de Partidario que encuentres entre ellas como efecto de este ataque.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Puoi usare l'effetto di una carta Aiuto presente tra esse come effetto di questo attacco.",
			'pt-br': "Seu oponente revela a mão dele. Você pode usar o efeito de uma carta de Apoiador que encontrar lá como o efeito deste ataque.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Du kannst den Effekt von 1 Unterstützerkarte, die du dort findest, als Effekt dieser Attacke einsetzen."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Eerie Wave",
			'fr-fr': "Vague Étrange",
			'es-es': "Onda Sobrecogedora",
			'it-it': "Ondamistero",
			'pt-br': "Onda Misteriosa",
			'de-de': "Gespenstische Woge"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760693,
				tcgplayer: 542807
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760693,
				tcgplayer: 542807
			}
		},
	],

	illustrator: "Nelnal",

}

export default card
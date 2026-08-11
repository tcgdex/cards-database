import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bewitching Eyes",
				'fr-fr': "Yeux Ensorcelants",
				'es-es': "Ojos Hechizantes",
				'it-it': "Ammaliasguardo",
				'pt-br': "Olhos Enfeitiçantes",
				'de-de': "Bezaubernde Augen"
			},
			effect: {
				'en-us': "Choose a Supporter card from your opponent's discard pile and use it as the effect of this attack.",
				'fr-fr': "Choisissez une carte Supporter de la pile de défausse de votre adversaire et utilisez-la en tant qu'effet de cette attaque.",
				'es-es': "Elige 1 carta de Partidario de la pila de descartes de tu rival y úsala como efecto de este ataque.",
				'it-it': "Scegli una carta Aiuto dalla pila degli scarti del tuo avversario e usala come effetto di questo attacco.",
				'pt-br': "Escolha um card de Apoiador na pilha de descarte do seu oponente e use-o como o efeito deste ataque.",
				'de-de': "Wähle 1 Unterstützerkarte aus dem Ablagestapel deines Gegners und verwende sie als Effekt dieses Angriffs."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Furtive Drop",
				'fr-fr': "Chute Furtive",
				'es-es': "Caída Furtiva",
				'it-it': "Lascito Furtivo",
				'pt-br': "Gota Furtiva",
				'de-de': "Hinterhältiger Fall"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent's Active Pokémon.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 3 contadores de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	retreat: 1,

	description: {
		'en-us': "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself.",
	},

	thirdParty: {
		cardmarket: 284225,
		tcgplayer: 101464
	}
}

export default card

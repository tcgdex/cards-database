import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Sableye",
         ja: "sableye",
         fr: "Sableye",
         de: "Sableye",
         es: "Sableye",
         it: "Sableye",
         pt: "Sableye",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [302],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Excavate",
            ja: "掘削",
            fr: "Creuser",
            de: "Ausgraben",
            es: "Excavar",
            it: "Scavare",
            pt: "Escavar",
          },
          effect: {
            en: "Once during your turn (before your attack), you may look at the card on top of your deck. Put that card on top of your deck, or discard that card. This power can't be used if Sableye is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、デッキの上のカードを見ることができます。そのカードをデッキの上に置くか、そのカードを破棄します。 Sableyeが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez regarder la carte sur votre jeu. Mettez cette carte sur votre jeu ou jetez cette carte. Ce pouvoir ne peut pas être utilisé si Sableye est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie sich die Karte auf Ihrem Deck ansehen. Legen Sie diese Karte auf Ihr Deck oder verwerfen Sie diese Karte. Diese Leistung kann nicht angewendet werden, wenn Sableye von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede mirar la carta en la parte superior de su mazo. Pon esa carta encima de tu mazo o deseche esa carta. Esta potencia no se puede usar si Sableye se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi guardare la carta sopra il mazzo. Metti quella carta sopra il tuo mazzo o scarta quella carta. Questa potenza non può essere utilizzata se Sableye è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode olhar para o cartão em cima do seu baralho. Coloque essa carta em cima do seu baralho ou descarte essa carta. Esse poder não pode ser usado se Sableye for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Disable",
            ja: "無効にします",
            fr: "Désactiver",
            de: "Deaktivieren",
            es: "Desactivar",
            it: "Disabilitare",
            pt: "Desativar",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. That Pokemon can't use that attack during your opponent's next turn.",
            ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Dieses Pokemon kann diesen Angriff in der nächsten Runde Ihres Gegners nicht verwenden.",
            es: "Elija 1 de los ataques defensores de Pokémon. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu oponente.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Quel Pokemon non può usare quell'attacco durante il prossimo turno del tuo avversario.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Esse Pokémon não pode usar esse ataque durante o próximo turno do seu oponente.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

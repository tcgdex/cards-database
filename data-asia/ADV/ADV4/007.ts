import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Crobat",
         ja: "クロバット",
         fr: "Crobat",
         de: "Crobat",
         es: "Cobat",
         it: "Crobat",
         pt: "CROBAT",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Flutter Trick",
            ja: "フラッタートリック",
            fr: "Tour de flottement",
            de: "Flatterntrick",
            es: "Truco de aleteo",
            it: "Trucco di flutter",
            pt: "Truque de vibração",
          },
          effect: {
            en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose.",
            ja: "コインをひっくり返します。頭の場合は、相手の手を見て、1枚のカードを選択してください。あなたの対戦相手はあなたが選んだカードを破棄します。",
            fr: "Retourner une pièce. Si les têtes, regardez la main de votre adversaire et choisissez 1 carte. Votre adversaire élimine la carte que vous avez choisie.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, schauen Sie sich die Hand Ihres Gegners an und wählen Sie 1 Karte. Ihr Gegner verwirft die Karte, die Sie ausgewählt haben.",
            es: "Voltea una moneda. Si se dirige, mira la mano de tu oponente y elige 1 carta. Tu oponente descarta la carta que elegiste.",
            it: "Capovolgi una moneta. Se le teste, guarda la mano del tuo avversario e scegli 1 carta. Il tuo avversario scarta la carta che hai scelto.",
            pt: "Vire uma moeda. Se as cabeças, olhe para a mão do seu oponente e escolha 1 cartão. Seu oponente descarta o cartão que você escolheu.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Triple Poison",
            ja: "トリプルポイズン",
            fr: "Triple poison",
            de: "Dreifachgift",
            es: "Veneno triple",
            it: "Triplo veleno",
            pt: "Veneno triplo",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokemon between turns.",
            ja: "防御ポケモンは現在中毒になっています。ターン間の防御ポケモンに1つではなく3つのダメージカウンターを入れます。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Mettez 3 compteurs de dégâts au lieu de 1 sur le Pokémon en défense entre les virages.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Legen Sie 3 Schadenszähler anstelle von 1 auf das verteidigende Pokémon zwischen den Kurven.",
            es: "El Pokémon defensor ahora está envenenado. Coloque 3 contadores de daño en lugar de 1 en el Pokémon defensor entre turnos.",
            it: "Il Pokemon in carica è ora avvelenato. Metti 3 contatori di danno invece di 1 sul Pokemon in difesa tra le curve.",
            pt: "O Pokémon atual agora está envenenado. Coloque 3 contadores de danos em vez de 1 no pokemon atual entre as voltas.",
          },
          damage: 10,
        },
      ],


      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

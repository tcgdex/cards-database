import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Mew Star (Delta Species)",
         ja: "ミュースター（デルタ種）",
         fr: "Mew Star (espèces delta)",
         de: "Mew Star (Delta -Arten)",
         es: "MEW Star (especie delta)",
         it: "MEW STAR (Delta Species)",
         pt: "MEW Star (espécie Delta)",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [151],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Mimicry",
            ja: "模倣",
            fr: "Mimétisme",
            de: "Mimikry",
            es: "Mimetismo",
            it: "Mimica",
            pt: "Mimetismo",
          },
          effect: {
            en: "Choose an attack on 1 of your opponent's Pokemon in play. Mimicry copies that attack. This attack does nothing if Mew {{Star|this Pokemon}} doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Mew {{Star|This Pokemon}} performs that attack.",
            ja: "プレイ中の対戦相手のポケモンの1人の攻撃を選択してください。模倣はその攻撃をコピーします。 Mew {{Star | This Pokemon}}がその攻撃を使用するのに必要なエネルギーがない場合、この攻撃は何もしません。 （その攻撃に必要な他のことをまだしなければなりません。）Mew {{Star | This Pokemon}）はその攻撃を実行します。",
            fr: "Choisissez une attaque sur le pokemon de votre adversaire en jeu. Mimétisme copie cette attaque. Cette attaque ne fait rien si MEW {{Star | Ce pokemon}} n'a pas l'énergie nécessaire pour utiliser cette attaque. (Vous devez toujours faire tout ce qui est requis pour cette attaque.) Mew {{Star | Ce pokemon}} effectue cette attaque.",
            de: "Wählen Sie einen Angriff auf einen der Pokémon Ihres Gegners im Spiel. Mimikry kopiert diesen Angriff. Dieser Angriff tut nichts, wenn mew {{star | dieses pokemon}} nicht die Energie hat, die erforderlich ist, um diesen Angriff zu verwenden. (Sie müssen noch alles tun, was für diesen Angriff erforderlich ist.) Mew {{stern | this pokemon}} führt diesen Angriff aus.",
            es: "Elija un ataque contra 1 de los Pokémon de tu oponente en juego. Mimacry copia ese ataque. Este ataque no hace nada si mew {{Star | este pokemon}} no tiene la energía necesaria para usar ese ataque. (Aún debes hacer cualquier otra cosa necesaria para ese ataque.) Mew {{Star | This Pokemon}} realiza ese ataque.",
            it: "Scegli un attacco a 1 del Pokemon del tuo avversario in gioco. Copie mimicizza quell'attacco. Questo attacco non fa nulla se mew {{star | questo Pokemon}} non ha l'energia necessaria per usare quell'attacco. (Devi ancora fare qualsiasi altra cosa richiesta per quell'attacco.) MEW {{Star | this Pokemon}} esegue quell'attacco.",
            pt: "Escolha um ataque a um dos Pokémon do seu oponente em jogo. Imitar cópias que atacam. Este ataque não faz nada se mew {{star | this Pokemon}} não tiver a energia necessária para usar esse ataque. (Você ainda deve fazer qualquer outra coisa necessária para esse ataque.) Mew {{Star | this Pokemon}} executa esse ataque.",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Rainbow Wave",
            ja: "虹の波",
            fr: "Vague arc-en-ciel",
            de: "Regenbogenwelle",
            es: "Ola del arco iris",
            it: "Wave arcobaleno",
            pt: "Onda arco -íris",
          },
          effect: {
            en: "Choose 1 basic Energy card attached to Mew {{Star|this Pokemon}}. This attack does 20 damage to each of your opponent's Pokemon that is the same type as the basic Energy card that you chose. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "mew {{star | this pokemon}}に添付された1つの基本エネルギーカードを選択します。この攻撃は、あなたが選んだ基本エネルギーカードと同じタイプの相手のポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 carte d'énergie de base attachée à MEW {{Star | Ce pokemon}}. Cette attaque inflige 20 dégâts à chacun des pokemon de votre adversaire qui est le même type que la carte d'énergie de base que vous avez choisi. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 Basic Energy Card, die an mew {{star | this pokemon}} beigefügt ist. Dieser Angriff schädigt 20 Pokémon Ihres Gegners, die den gleichen Typ wie die von Ihnen ausgewählte grundlegende Energiekarte entsprechen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 tarjeta de energía básica adjunta a Mew {{Star | este Pokemon}}. Este ataque hace 20 daños a cada Pokémon de tu oponente que es del mismo tipo que la tarjeta de energía básica que eligió. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 scheda di energia di base allegata a MEW {{Star | questo Pokemon}}. Questo attacco infligge 20 danni a ciascuno dei Pokemon del tuo avversario che è lo stesso tipo della carta di energia di base che hai scelto. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 cartão de energia básico anexado a mew {{star | this Pokemon}}. Este ataque causa 20 danos a cada um dos Pokémon do seu oponente, que é o mesmo tipo que o cartão de energia básico que você escolheu. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

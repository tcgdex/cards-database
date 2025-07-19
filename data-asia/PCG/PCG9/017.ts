import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Togetic (Delta Species)",
         ja: "togetic（デルタ種）",
         fr: "Togetic (espèces delta)",
         de: "Togetiker (Delta -Arten)",
         es: "TOGETIC (especie delta)",
         it: "TEGETIC (Delta Species)",
         pt: "Tegetic (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [176],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Delta Copy",
            ja: "デルタコピー",
            fr: "Copie delta",
            de: "Delta -Kopie",
            es: "Copia delta",
            it: "Copia delta",
            pt: "Cópia delta",
          },
          effect: {
            en: "Choose an attack on 1 of your opponent's Pokemon in play that has d on its card. Delta Copy copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Togetic performs that attack.",
            ja: "カードにDがある相手のポケモンの1つの攻撃を選択します。デルタは、エネルギーコストを除いて、その攻撃をコピーします。 （その攻撃に必要な他のことをまだしなければなりません。）Togeticはその攻撃を実行します。",
            fr: "Choisissez une attaque sur le pokemon de votre adversaire en jeu qui a D sur sa carte. Delta copie des copies qui attaquent à l'exception de son coût énergétique. (Vous devez toujours faire tout ce qui est requis pour cette attaque.) Togetic effectue cette attaque.",
            de: "Wählen Sie einen Angriff auf 1 des Pokémon Ihres Gegners im Spiel, das auf seine Karte enthält. Delta -Kopien kopieren, die mit Ausnahme der Energiekosten angreifen. (Sie müssen noch alles tun, was für diesen Angriff erforderlich ist.) Togetic führt diesen Angriff aus.",
            es: "Elija un ataque contra 1 de los Pokémon de tu oponente en juego que tiene D en su carta. Delta copia copias que atacan, excepto por su costo de energía. (Aún debes hacer cualquier otra cosa necesaria para ese ataque). Togety realiza ese ataque.",
            it: "Scegli un attacco a 1 del Pokemon del tuo avversario in gioco che ha D sulla sua carta. Delta copie copie che attaccano tranne il suo costo energetico. (Devi ancora fare qualsiasi altra cosa richiesta per quell'attacco.) Tagico esegue quell'attacco.",
            pt: "Escolha um ataque a um dos Pokémon do seu oponente em jogo que tem D em sua carta. Delta cópia de cópias que atacam, exceto por seu custo de energia. (Você ainda deve fazer qualquer outra coisa necessária para esse ataque.) Togetic realiza esse ataque.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Wave Splash",
            ja: "波のスプラッシュ",
            fr: "Vague de vagues",
            de: "Wellenspritzer",
            es: "Salpicadería",
            it: "Splash d'onda",
            pt: "Splash de onda",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};

import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Togetic",
         ja: "togetic",
         fr: "Togetic",
         de: "Togetisch",
         es: "Togés",
         it: "Togetico",
         pt: "Tegetic",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [176],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Super Metronome",
            ja: "スーパーメトロノーム",
            fr: "Super-métronome",
            de: "Super Metronom",
            es: "Super metrónomo",
            it: "Super Metronome",
            pt: "Super metrônomo",
          },
          effect: {
            en: "Flip a coin. If heads, choose an attack of 1 of your opponent's Pokemon. Super Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokemon is, Togetic's type is still Colorless.) Togetic performs that attack. (Togetic can make that attack even if it does not have the appropriate number of type of Energy attached to it necessary to make the attack.)",
            ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンの1匹の攻撃を選択します。スーパーメトロノームは、エネルギーコストを除いてその攻撃をコピーします。 （その攻撃を使用するには、他のことをしなければなりません。）（防御ポケモンがどんなタイプであっても、Togeticのタイプはまだ無色です。）Togeticはその攻撃を実行します。 （Togeticは、攻撃を行うために必要な適切な数のタイプのエネルギーが付着していなくても、その攻撃を行うことができます。）",
            fr: "Retourner une pièce. Si les têtes, choisissez une attaque de 1 du Pokémon de votre adversaire. Super Metronome copie qui attaque à l'exception de son coût énergétique. (Vous devez toujours faire autre chose pour utiliser cette attaque.) (Quel que soit le type que le type Pokémon en défense, le type de Togetic est toujours incolore.) Togetic effectue cette attaque. (Togetic peut faire cette attaque même s'il n'a pas le nombre approprié de type d'énergie qui lui est attaché nécessaire pour faire l'attaque.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie einen Angriff von 1 des Pokémon Ihres Gegners. Super Metronome -Kopien, die mit Ausnahme der Energiekosten angreifen. (Sie müssen noch etwas anderes tun, um diesen Angriff zu verwenden.) (Unabhängig davon, in welchem Typ das verteidigende Pokemon ist, ist Togetics Typ immer noch farblos.) Togetic führt diesen Angriff aus. (Togetic kann diesen Angriff ausführen, auch wenn er nicht die entsprechende Anzahl von Energietypen hat, die an ihn erforderlich sind, um den Angriff vorzunehmen.)",
            es: "Voltea una moneda. Si se dirige, elija un ataque de 1 de los Pokémon de tu oponente. Las copias de super metrónomo que atacan, excepto por su costo de energía. (Aún debe hacer cualquier otra cosa para usar ese ataque). (No importa qué tipo sea el Pokémon defensor, el tipo de Togetic aún es incoloro). TOGETIC realiza ese ataque. (TOGETIC puede hacer ese ataque incluso si no tiene el número apropiado de energía que se le une a él necesario para hacer el ataque).",
            it: "Capovolgi una moneta. Se testa, scegli un attacco di 1 del Pokemon del tuo avversario. Super Metronome copie che attaccano tranne il suo costo energetico. (Devi ancora fare qualsiasi altra cosa per usare quell'attacco.) (Non importa quale tipo sia il Pokemon in difesa, il tipo di Togetic è ancora incolore.) Togetic esegue quell'attacco. (Togetic può effettuare quell'attacco anche se non ha il numero appropriato di tipo di energia collegato a essa necessario per effettuare l'attacco.)",
            pt: "Vire uma moeda. Se as cabeças, escolha um ataque de 1 dos Pokémon do seu oponente. Super Metronome Cópias que atacam, exceto por seu custo de energia. (Você ainda deve fazer qualquer outra coisa para usar esse ataque.) (Não importa o tipo que o Pokemon defensor seja, o tipo de TOGETIC ainda é incolor.) Togetic executa esse ataque. (O TOGETIC pode fazer esse ataque, mesmo que não tenha o número apropriado de tipo de energia ligada a ele para fazer o ataque.)",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Fly",
            ja: "飛ぶ",
            fr: "Voler",
            de: "Fliegen",
            es: "Volar",
            it: "Volare",
            pt: "Voar",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Togetic; if tails, this attack does nothing (not even damage).",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ダメージを含む攻撃のすべての影響を防止します。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain virage de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Togetic; Si Tails, cette attaque ne fait rien (pas même de dégâts).",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Togetic, verhindern; Wenn Schwänze, tut dieser Angriff nichts (nicht einmal Schaden).",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan todos los efectos de los ataques, incluido el daño, se hacen a la palanca; Si Tails, este ataque no hace nada (ni siquiera daño).",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno del tuo avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Togetic; Se le code, questo attacco non fa nulla (nemmeno danni).",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao TOGETIC; Se caudas, esse ataque não faz nada (nem sequer dano).",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};

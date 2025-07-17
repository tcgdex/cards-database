import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Electrode - 035/092",
         ja: "電極-035/092",
         fr: "Electrode - 035/092",
         de: "Elektrode - 035/092",
         es: "Electrodo - 035/092",
         it: "Elettrodo - 035/092",
         pt: "Eletrodo - 035/092",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [101],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Super Dynamo",
            ja: "スーパーダイナモ",
            fr: "Super dynamo",
            de: "Super Dynamo",
            es: "Super dinamo",
            it: "Super Dynamo",
            pt: "Super Dynamo",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Electrode is your Active Pokmon, you may flip a coin. If heads, choose a Lightning Energy card from your discard pile and attach it to 1 of your Pokmon. This power can't be used if Electrode is affected by a Special Condition.",
            ja: "ターン中に<em>（攻撃の前）</em> </em>、電極がアクティブなポクモンの場合、コインをひっくり返すことができます。頭の場合は、廃棄パイルから稲妻エネルギーカードを選択し、1つのポクモンに取り付けます。電極が特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si l'électrode est votre pokmon actif, vous pouvez retourner une pièce. Si les têtes, choisissez une carte d'énergie Lightning dans votre tas de défausse et fixez-la à 1 de votre Pokmon. Cette puissance ne peut pas être utilisée si l'électrode est affectée par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen, wenn Elektrode Ihr aktives Pokmon ist. Wenn Sie Köpfe sind, wählen Sie eine Lightning Energy -Karte von Ihrem Ablagerungsstapel aus und befestigen Sie sie an 1 Ihres Pokmon. Diese Leistung kann nicht verwendet werden, wenn die Elektrode durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si el electrodo es su Pokmon activo, puede voltear una moneda. Si se dirige, elija una tarjeta de energía Lightning de su pila de descarte y adhiérase a 1 de su Pokmon. Esta potencia no se puede usar si el electrodo se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima dell'attacco) </em>, se l'elettrodo è il tuo Pokmon attivo, puoi capovolgere una moneta. Se le teste, scegli una scheda di energia Lightning dalla pila di scarto e attaccalo a 1 del tuo Pokmon. Questa potenza non può essere utilizzata se l'elettrodo è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se o eletrodo for o seu Pokmon ativo, você poderá virar uma moeda. Se as cabeças, escolha um cartão de energia relâmpago na sua pilha de descarte e prenda -a a 1 do seu Pokmon. Essa potência não pode ser usada se o eletrodo for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Swift",
            ja: "迅速",
            fr: "Rapide",
            de: "Schnell",
            es: "Rápido",
            it: "Swift",
            pt: "Swift",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness, Resistance, Pok?-Powers, Pok?-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pok? -Powers, Pok? -Bodies ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Pok? -Anteilen, Pok? -Boden oder anderen Auswirkungen auf das verteidigende Pokémon betroffen.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, POK? -Poters, POK? Los cuerpos o los otros efectos en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Pok? -Powers, Pok? -Bodies o altri effetti sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, pok? -Wers, pok?-Corpos ou outros efeitos no defesa do Pokemon.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

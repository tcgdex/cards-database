import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Kabuto",
         ja: "カブト",
         fr: "Kabuto",
         de: "Kabuto",
         es: "Kabuto",
         it: "Kabuto",
         pt: "Kabuto",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [140],
      hp: 50,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Revive Friends",
            ja: "友達を復活させます",
            fr: "Raviver des amis",
            de: "Freunde wiederbeleben",
            es: "Revive Friends",
            it: "Rivivi gli amici",
            pt: "Revive amigos",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, search your deck for a card named Kabuto and put it on your Bench. Shuffle your deck afterward. Treat the new Kabuto as a Basic Pokmon. This power can't be used if Kabuto is Asleep, Confused, or Paralyzed <em>(or if your Bench is full)</em>.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭がある場合は、カブトという名前のカードをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。新しいカブトを基本的なポクモンとして扱ってください。 Kabutoが眠っている、混乱し、麻痺した<em>（またはベンチがいっぱいの場合）</em>である場合、このパワーは使用できません</em>。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, recherchez votre jeu une carte nommée Kabuto et mettez-la sur votre banc. Mélanger votre deck par la suite. Traitez le nouveau Kabuto comme un pokmon de base. Ce pouvoir ne peut pas être utilisé si Kabuto est endormi, confus ou paralysé <em> (ou si votre banc est plein) </em>.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer Karte namens Kabuto und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. Behandle den neuen Kabuto als Basis -Pokmon. Diese Kraft kann nicht verwendet werden, wenn Kabuto schläft, verwirrt oder gelähmt ist (oder wenn Ihre Bank voll ist) </em>.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, busque en su mazo una carta llamada Kabuto y póngala en su banco. Baraja tu mazo después. Trate el nuevo Kabuto como un Pokmon básico. Este poder no se puede usar si Kabuto está dormido, confundido o paralizado <em> (o si su banco está lleno) </em>.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, cerca nel tuo mazzo una carta chiamata Kabuto e mettila in panchina. Shuffle il tuo mazzo in seguito. Tratta il nuovo Kabuto come un Pokmon di base. Questo potere non può essere usato se Kabuto è addormentato, confuso o paralizzato <em> (o se la panca è piena) </em>.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, procure um baralho para um cartão chamado Kabuto e coloque -o em seu banco. Afaste seu baralho depois. Trate o novo Kabuto como um Pokmon básico. Esse poder não pode ser usado se Kabuto estiver dormindo, confuso ou paralisado <em> (ou se o seu banco estiver cheio) </em>.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Work Together",
            ja: "一緒に働きます",
            fr: "Travailler ensemble",
            de: "Zusammenarbeiten",
            es: "Trabajar juntos",
            it: "Lavorare insieme",
            pt: "Trabalhar juntos",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, Kabutops, and Aerodactyl on your Bench.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて、それぞれのオマーニテ、オマスター、カブト、カブトップス、アエロダクチルごとに10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dommages supplémentaires pour chaque Omanyte, Omastar, Kabuto, Kabutops et Aerodactyle sur votre banc.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden für jede Omanyte, Omastar, Kabuto, Kabutops und Aerodactyl auf Ihrer Bank.",
            es: "Voltea una moneda. Si las cabezas, este ataque hace 10 daños más 10 daños más para cada Omanyte, OmaStar, Kabuto, Kabutops y Aerodactyl en su banco.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 10 danni in più per ogni Omanyte, Omastar, Kabuto, Kabutops e aerodattil sulla panchina.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 danos a cada Omanyte, Omastar, Kabuto, Kabutops e Aerodactyl em seu banco.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
